# AI 에이전트 작업자 가이드

- Commit 메시지는 [Conventional Commits](https://www.conventionalcommits.org/)를 따르세요.
- 패키지 관리 및 스크립트(package.json 내 .scripts) 실행이 필요하면 `vp` CLI를 사용하세요.
  - [VITE+](https://viteplus.dev/guide/) CLI입니다.
  - nvm처럼 Node.js 런타임 관리 기능을 포함하고 있습니다.
  - 현재 패키지 관리는 pnpm을 사용하고 있지만 **`pnpm` CLI를 직접 사용하지 마세요.** `vp` 내부적으로 `pnpm`을 호출합니다.
    - `pnpm i` 대신에 `vp i`를 사용하세요.
    - `pnpm add foo` 대신에 `vp add foo`를 사용하세요.
    - `pnpm add --save-dev foo` 대신에 `vp add -D foo`를 사용하세요.
    - `pnpm run build` 대신에 `vp run build`를 사용하세요.
    - 모르는 것이 있으면 `vp --help`를 사용하세요.
