#!/bin/bash

# 색상 코드 정의
BLACK='\033[30m'
RED='\033[31m'
GREEN='\033[32m'
YELLOW='\033[33m'
BLUE='\033[34m'

BLACKBOLD='\033[1;30m'
YELLOWBOLD='\033[1;33m'
WHITEBOLD='\033[1;37m'
RESET='\033[0m'

BACKYELLOW='\033[43m'
BACKBLACK='\033[40m'
BACKRESET='\033[49m'

echo ""

echo -e "${YELLOWBOLD}==== Script Start: check_submodule.sh ====${RESET}"
echo -e "${YELLOW}└▶ Parent: idea${RESET}"
echo -e "${YELLOW}└▶ Submodule: library/propStyling${RESET}"
echo ""

# 서브모듈 디렉토리 확인
echo -e "${WHITEBOLD}==== Checking Submodule Status ====${BACKRESET}${RESET}"
if [[ -f ".git" && $(head -n 1 .git) == gitdir:* ]]; then
    echo -e "${GREEN}INFO: This is a Git submodule.${RESET}"
elif [[ -d ".git" ]]; then
    echo -e "${GREEN}INFO: This is a Git repository.${RESET}"
else
    echo -e "${RED}ERROR: This is not a Git repository or submodule.${RESET}"
    exit 1
fi

# 1. 서브모듈 상태 확인
echo -e "${WHITEBOLD}Submodule git status:${RESET}"
git status -sb
if [[ $? -eq 0 ]]; then
    echo -e "${GREEN}SUCCESS: Submodule status retrieved.${RESET}"
else
    echo -e "${RED}ERROR: Failed to retrieve submodule status.${RESET}"
    exit 1
fi

# 2. 브랜치 확인
echo
echo -e "${WHITEBOLD}==== Checking Branch Status ====${RESET}"
CURRENT_BRANCH=$(git branch --show-current)
if [[ -z "$CURRENT_BRANCH" ]]; then
    echo -e "${RED}ERROR: No branch is checked out.${RESET}"
else
    echo -e "${GREEN}Current branch: $CURRENT_BRANCH${RESET}"
fi

# 원격 브랜치 추적 상태 확인
echo -e "${WHITEBOLD}Upstream branch:${RESET}"
git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>/dev/null
if [[ $? -ne 0 ]]; then
    echo -e "${RED}ERROR: No upstream branch set.${RESET}"
else
    echo -e "${GREEN}SUCCESS: Upstream branch is set.${RESET}"
fi

# 3. 변경사항 확인
echo
echo -e "${WHITEBOLD}==== Checking Changes in Submodule ====${RESET}"
if git diff --quiet; then
    echo -e "${GREEN}No local changes.${RESET}"
else
    echo -e "${YELLOW}There are local changes in the working directory.${RESET}"
    git diff --stat
fi

# 4. 부모와 서브모듈 커밋 차이 확인
echo
echo -e "${WHITEBOLD}==== Comparing Submodule Commit with Parent ====${RESET}"
PARENT_COMMIT=$(git rev-parse HEAD)
CURRENT_COMMIT=$(git rev-parse @{u} 2>/dev/null)

if [[ "$PARENT_COMMIT" == "$CURRENT_COMMIT" ]]; then
    echo -e "${GREEN}Submodule is up-to-date with parent.${RESET}"
else
    echo -e "${YELLOW}Submodule is NOT up-to-date with parent.${RESET}"
    echo -e "${YELLOW}Parent commit:   $PARENT_COMMIT${RESET}"
    echo -e "${YELLOW}Remote commit:   $CURRENT_COMMIT${RESET}"
fi

echo
echo -e "${GREEN}Submodule check completed.${RESET}"
echo ""
