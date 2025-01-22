#!/bin/bash

# Check if argument is passed
if [ -z "$1" ]; then
  echo "Usage: $0 <path-to-root-folder>"
  exit 1
fi

ROOT_DIR="$1"
OUTPUT_FILE="$ROOT_DIR/solved.csv"

# Ensure the path exists and is a directory
if [ ! -d "$ROOT_DIR" ]; then
  echo "Error: '$ROOT_DIR' is not a valid directory."
  exit 1
fi

# Write CSV header
echo "number,name,javascript,python,best Time (ms),best Time Percentile,best Memory(MB),best Memory Percentile" > "$OUTPUT_FILE"

# Loop through directories
for dir in "$ROOT_DIR"/*/; do
  dirname=$(basename "$dir")

  # Ensure it matches expected pattern
  if [[ "$dirname" =~ ^([0-9]+)-([^-]+)$ ]]; then
    number="${BASH_REMATCH[1]}"
    name="${BASH_REMATCH[2]}"

    # Check for .a and .b files inside this subfolder
    javascript="FALSE"
    python="FALSE"

    # Use find to check if any matching files exist
    if find "$dir" -maxdepth 1 -type f -name "*.js" | grep -q .; then
      javascript="TRUE"
    fi
    if find "$dir" -maxdepth 1 -type f -name "*.py" | grep -q .; then
      python="TRUE"
    fi

     # Initialize values
    time="null"
    time_percent="null"
    memory="null"
    memory_percent="null"

    res_file="$dir/result.md"
    if [ -f "$res_file" ]; then
      # Use grep and sed to extract values
      runtime_line=$(grep -E '\*\*Runtime\*\*' "$res_file")
      memory_line=$(grep -E '\*\*Memory\*\*' "$res_file")

      if [[ "$runtime_line" =~ ([0-9]+\.[0-9]+|[0-9]+)ms\(([0-9]+\.[0-9]+|[0-9]+)%\) ]]; then
        time="${BASH_REMATCH[1]}"
        time_percent="${BASH_REMATCH[2]}"
      fi
      if [[ "$memory_line" =~ ([0-9]+\.[0-9]+|[0-9]+)MB\(([0-9]+\.[0-9]+|[0-9]+)%\) ]]; then
        memory="${BASH_REMATCH[1]}"
        memory_percent="${BASH_REMATCH[2]}"
      fi
    fi

    # Append row to CSV
    echo "$number,$name,$javascript,$python,$time,$time_percent,$memory,$memory_percent" >> "$OUTPUT_FILE"
  fi
done

echo "CSV generated at: $OUTPUT_FILE"