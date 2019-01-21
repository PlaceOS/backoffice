#!/bin/bash

if  [ -n "$AWS_ACCESS_KEY" ]; then
    if [ -n "$AWS_SECRET_KEY" ]; then
        if [ -n $DEMO_ROUTE ]; then
            gulp build --demo --route=$DEMO_ROUTE
        else
            echo "No route for demo"
        fi
    else
        echo "No AWS Secret Key"
    fi
else
    echo "No AWS Access Key"
fi