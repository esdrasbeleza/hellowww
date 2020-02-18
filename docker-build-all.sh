#!/bin/sh

readonly version=${1:-latest}
readonly registry=$2

for directory_with_dockerfile in `find . -name Dockerfile -exec dirname {} \;`; do
    directory_name=`echo $directory_with_dockerfile | sed 's/.*\///g'`

    echo "Building hellowww:${version}-${directory_name}"
    docker build -t hellowww:${version}-${directory_name} ${directory_with_dockerfile}
done