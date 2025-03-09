// jest.config.ts
import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // if using absolute paths
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
