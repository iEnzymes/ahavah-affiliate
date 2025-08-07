#!/bin/bash

# Check if two parameters are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <svg_folder_path> <output_filename>"
else
    folder_path="$1"
    output_filename="$2"

    # Start the SVG file
    echo "<svg xmlns='http://www.w3.org/2000/svg'>" > "$output_filename"

    echo "<defs>" >> "$output_filename"

    # Loop through all SVG files in the current directory
    for svg_file in "$folder_path"/*.svg; do
        filename=$(basename -- "$svg_file" .svg)
        echo "$filename"
        
        # Skip the output file itself
        if [ "$svg_file" != "$output_filename" ]; then
            # Add the contents of each SVG file to the output file
            cat "$svg_file" | grep -v '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' | sed 's/<svg /<svg id="'"$filename"'" /' >> "$output_filename"
        fi
    done


    echo "</defs>" >> "$output_filename"

    # End the SVG file
    echo "</svg>" >> "$output_filename"

    echo "Combined SVG files into $output_filename"
fi
