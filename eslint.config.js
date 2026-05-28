import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']), // 빌드 결과물 폴더는 린트 검사 제외
  {
    files: ['**/*.{ts,tsx}'], // ts, tsx파일만 검사 대상 지정
    extends: [
      js.configs.recommended, // ESLint기본 권장 규칙 적용
      tseslint.configs.recommended, // TS전용 기본 규칙 적용
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier, // ESLint와 Prettier 규칙 충돌방지
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
