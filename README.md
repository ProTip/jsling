(J)SLING
======

Sling JSON with Javascript.


```bash
aws cognito-idp ... | '$.Users.map(u => ({status: u.UserStatus, email: u.Attributes.find(a => a.Name == "email").Value }))'
```