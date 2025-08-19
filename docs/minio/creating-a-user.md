---
layout: doc
---

# Creating a User

To check if there are any users available try the following command:

> Here and in most other tutorials `myminio` is the current alias.

#### Check for Users of the current alias

```bash
mc admin user ls myminio
```

To create a user try the following command:

```bash
mc admin user add myminio tanglesites minioadmin
```

> Where `tanglesites` is the **username** and `minioadmin` is the **password**

If you check for users this time, assuming you did not have any before you should get a non-empty result to the console:

```bash
mc admin user ls myminio
```

::: info Console Output `mc admin user ls myminio`

```bash
enabled    tanglesites           readwrite
```

:::

The next thing you want to do is attach a policy to the newly created user.

#### Get a list of policies

```bash
mc admin policy list myminio
```

::: info Console Output `mc admin user ls myminio`

```bash
➜  ~ mc admin user ls myminio
writeonly
consoleAdmin
diagnostics
readonly
readwrite
```

:::

If you want to get more information on the policy try:

```bash
mc admin policy info myminio readwrite
```

::: info Console Output `mc admin policy info myminio readwrite`

```bash
➜  ~ mc admin policy info myminio readwrite
{
 "PolicyName": "readwrite",
 "Policy": {
  "Version": "2012-10-17",
  "Statement": [
   {
    "Effect": "Allow",
    "Action": [
     "s3:*"
    ],
    "Resource": [
     "arn:aws:s3:::*"
    ]
   }
  ]
 }
}
```

:::

And once you have the found the right policy for your user you need to attach it to the user

```bash
mc admin policy attach myminio readwrite --user tanglesites
```

::: info Console Output `mc admin policy attach myminio readwrite --user tanglesites`

```bash
➜  ~ mc admin policy attach myminio readwrite --user tanglesites
Attached Policies: [readwrite]
To User: tanglesites
```

:::

To check if the policy was attached to the user `tanglesites` try the following command:

```bash
mc admin policy entities myminio --user tanglesites
```

::: info Console Output `mc admin policy entities myminio --user tanglesites`

```bash
➜  ~ mc admin policy entities myminio --user tanglesites
Query time: 2025-08-14T02:20:06Z
User -> Policy Mappings:
  User: tanglesites
    Policies:
      readwrite
```

:::

Now that you have a user and the appropriate policy attached to the user, you can now connect to the MinIO server with your newly created user.

```bash
mc alias set s31 http://192.168.1.141:9000 tanglesites minioadmin
```

::: info Console Output `mc alias set s31 http://192.168.1.141:9000 tanglesites minioadmin`

```bash
➜  ~ mc alias set s31 http://192.168.1.141:9000 tanglesites minioadmin
Added `s31` successfully.
```

:::

### Congratulations :star:

What have you learned?

- Create a user
- Explored MinIO Policies
- Attached a policy to the user
- And added that user to the MinIO server.
