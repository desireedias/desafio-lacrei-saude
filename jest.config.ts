import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Forneça o caminho para o seu aplicativo Next.js para carregar next.config.js e arquivos .env em seu ambiente de teste
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Lida com aliases de caminho (ajuste se seu tsconfig for diferente)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

export default createJestConfig(config);