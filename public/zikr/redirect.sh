#!/bin/bash

ALIAS_DIR="./nouhaDarHaal"
OUTPUT_FILE="./_redirects"

# Clear the output file
> "$OUTPUT_FILE"

# Loop through all symlinks
find "$ALIAS_DIR" -type l | while read -r symlink; do
  # Public alias path
  alias_path="/${symlink#./}"

  # Resolve absolute target
  absolute_target=$(readlink -f "$symlink")

  # Skip if target doesn't exist
  [ ! -e "$absolute_target" ] && continue

  # Convert to relative from project root
  relative_target="/${absolute_target#$PWD/}"

  # Output with properly escaped paths
  printf "\"%s\" \"%s\" 200\n" "$alias_path" "$relative_target" >> "$OUTPUT_FILE"
done

echo "✅ _redirects generated from symlinks!"
