README.md

## Environment setup
See Setup-Readme.md for steps to setup environment

## Edit config with credentials
### cypress.env.json
- Edit any referenced credentials for testing. ie. ssb links, okta url, database
- For this example edit the emplManagerPair[0].employee.username and .password
    (note you can always change this json structure, as long as it's consistent with where it's being referenced)
```
{
    "db" : {
        "devl": {
            "host": "https://DATABASE_HOST_HERE/DEVL",
            "username": "BANINST_USER_HERE",
            "password": "PASSWORD_HERE"
        }
    }   ,
    "ssb": {
        "devl" :{
            "empl": "https://employeessb-devl.ec.cccd.edu:8102/EmployeeSelfService"
        }
    },
    "auth": {
        "devl": {
            "okta": "https://cccd-test.okta.com/"
        }
    },
    "emplManagerPair": [
        {
            "employee": {
                "username": "YOUR_NAME_HERE",
                "password": "YOUR_PASS_HERE",
                "pidm": YOUR_PIDM_HERE
            },
            "manager": {
                "username": "YOUR_MANAGER_HERE",
                "password": "YOUR_MANAGER_PASS",
                "pidm": YOUR_MANAGER_PIDM
            }
        },
        {
            "employee": {
                "username": "OTHER_USER",
                "password": "OTHER_PASS",
                "pidm": OTHER_PIDM
            },
            "manager": {
                "username": "OTHER_MGR_USER",
                "password": "OTHER_MGR_PIDM",
                "pidm": OTHER_MGR_PIDM
            }
        }
    ]
}
```

## Start the test server
This will open up a new browser with a dashboard of all tests within this project directory
```
cd </your project directory with the .yarn file>
npm cypress open
```

## Select the test to run, or run all
voila
