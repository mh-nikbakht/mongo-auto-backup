# Back up Mongodb.

One of the most painful thing in a life of developer is database lost. So you need to back up regular. Say every day at 2AM or every day of month.  
Do it manually is also painful so I make this to demo how we can backup database automatic.

# Key function

backup.js

backup directory example

```
-backup
└── posts
    ├── posts.bson
    └── posts.metadata.json
```

# Key to remember.

## Backup with mongodump

```
mongodump --host=localhost --port=27017 --db=your_db  --out=./backup
```

Wait for the back up to run by itself.

```
BACKUP SUCCESS AT Thu Oct 24 2019 11:09:01 GMT+0700 (Indochina Time)
```

# Restore

```
mongorestore backup
//result
2019-10-24T09:50:23.739+0700    preparing collections to restore from
2019-10-24T09:50:23.739+0700    reading metadata for posts.posts from backup/posts/posts.metadata.json
2019-10-24T09:50:23.740+0700    restoring posts.posts from backup/posts/posts.bson
2019-10-24T09:50:23.741+0700    no indexes to restore
2019-10-24T09:50:23.741+0700    finished restoring posts.posts (2 documents)
2019-10-24T09:50:23.741+0700    done
```

Where

- mongorestore is the cli of mongodb.
- backup is the directory that have your backup.
