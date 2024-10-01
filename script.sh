#!/bin/bash

# Define the filenames
FILES=("index.html" "styles.css" "script.js")

# Variable to hold the final output
OUTPUT=""

# Function to determine the language based on the file extension
get_language_by_extension() {
    case "$1" in
        *.html) echo "html" ;;
        *.css) echo "css" ;;
        *.js) echo "javascript" ;;
        *) echo "" ;;
    esac
}

# Iterate through each file
for FILE in "${FILES[@]}"; do
    if [[ -f "$FILE" ]]; then
        # Read the file content
        CONTENT=$(<"$FILE")

        # Determine the markdown language
        LANGUAGE=$(get_language_by_extension "$FILE")

        # Append the file name and content to OUTPUT
        OUTPUT+="# $FILE\n"
        OUTPUT+="\n\`\`\`$LANGUAGE\n"
        OUTPUT+="$CONTENT"
        OUTPUT+="\n\`\`\`\n\n"
    else
        # If file is missing, add a warning message
        OUTPUT+="# $FILE\n"
        OUTPUT+="\n\`\`\`\n"
        OUTPUT+="File not found.\n"
        OUTPUT+="\n\`\`\`\n\n"
    fi
done

# Copy the output to the clipboard
echo -e "$OUTPUT" | pbcopy

# Confirmation message
echo "The content has been copied to the clipboard."

