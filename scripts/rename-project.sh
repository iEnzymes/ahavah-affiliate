#!/bin/bash

current_project_name="ahavah-affiliate"
current_repository_url="https://github.com/iEnzymes/ahavah-affiliate.git"

find_files() {
    grep -rl --exclude-dir={.git,.angular,node_modules,dist} --exclude="*.scss" "$current_project_name" .
}

prompt_project_name() {
    read -rp "Enter new project name: [current: $current_project_name] " project_name
    echo "${project_name:-$current_project_name}"
}

prompt_repository_url() {
    read -rp "Enter repository url: [current: $current_repository_url] " repository_url
    echo "${repository_url:-$current_repository_url}"
}

prompt_confirmation() {
    local project_name=$1
    local repository_url=$2

    [[ "$project_name" == "$current_project_name" && "$repository_url" == "$current_repository_url" ]] && { echo "Parameters remained unchanged. No renaming required."; exit 0; }

    read -rp "Are you sure you want to continue? (Y/n) " confirm
    echo "${confirm:-y}"
}

process_files() {
    local files="$1"
    local project_name="$2"
    local repository_url="$3"

    for file in $files; do
        sed -i \
            -e "s|$current_repository_url|$repository_url|g" \
            -e "s|$current_project_name|$project_name|g" \
            "$file"
    done

    echo "Project renamed to $project_name"
}

files=$(find_files)

echo "Results found for $current_project_name:"
echo "$files"
echo

project_name=$(prompt_project_name)
repository_url=$(prompt_repository_url)
confirm=$(prompt_confirmation "$project_name" "$repository_url")

if [[ "$confirm" == "y" || "$confirm" == "Y" ]]; then
    process_files "$files" "$project_name" "$repository_url"
else
    echo "Renaming canceled."
fi
