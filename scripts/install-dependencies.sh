
if  [ "$CACHE" = "false" ]; then
    echo "No cache for this task"
else
    DIR="./node_modules"
    current_lock=./package-lock.json
    old_lock=./package-lock.old.json
    echo "Checking if node modules have been installed..."
    if [ -d "$DIR" ]; then
        echo "Checking whether modules have changed..."
        if cmp -s "$current_lock" "$old_lock"; then
            echo "Package lock is the same"
        else
            echo "Package lock has changed"
            npm ci
        fi
    else
        echo "No node modules installing"
        npm ci
    fi
    cp $current_lock $old_lock
fi
