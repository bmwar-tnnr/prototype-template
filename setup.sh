#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${BLUE}🚀 Prototype Template Setup${NC}"
echo ""

# Get project name from user
read -p "Enter your prototype name (e.g., patient-dashboard): " PROJECT_NAME

# Validate input
if [ -z "$PROJECT_NAME" ]; then
    echo -e "${RED}Error: Project name cannot be empty${NC}"
    exit 1
fi

# Convert to lowercase and replace spaces with hyphens
PROJECT_NAME=$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

echo ""
echo -e "Setting up: ${GREEN}$PROJECT_NAME${NC}"
echo ""

# Update root package.json
if [ -f "package.json" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/\"name\": \"prototype-template\"/\"name\": \"$PROJECT_NAME\"/" package.json
    else
        # Linux
        sed -i "s/\"name\": \"prototype-template\"/\"name\": \"$PROJECT_NAME\"/" package.json
    fi
    echo "✓ Updated root package.json"
fi

# Update app package.json
if [ -f "app/package.json" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/\"name\": \"app\"/\"name\": \"$PROJECT_NAME-app\"/" app/package.json
    else
        sed -i "s/\"name\": \"app\"/\"name\": \"$PROJECT_NAME-app\"/" app/package.json
    fi
    echo "✓ Updated app/package.json"
fi

# Update sidebar title
if [ -f "app/src/components/shell/sidebar.tsx" ]; then
    # Convert project name to title case for display
    DISPLAY_NAME=$(echo "$PROJECT_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s/Prototype/$DISPLAY_NAME/" app/src/components/shell/sidebar.tsx
    else
        sed -i "s/Prototype/$DISPLAY_NAME/" app/src/components/shell/sidebar.tsx
    fi
    echo "✓ Updated sidebar title"
fi

# Initialize git repository
echo ""
read -p "Initialize git repository? (Y/n): " INIT_GIT
INIT_GIT=${INIT_GIT:-Y}

if [[ "$INIT_GIT" =~ ^[Yy]$ ]]; then
    git init
    git add .
    git commit -m "Initial commit from prototype-template"
    echo "✓ Initialized git repository"
fi

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. pnpm install"
echo "  2. pnpm dev"
echo ""
echo "Your prototype will be running at http://localhost:3060"
echo ""
