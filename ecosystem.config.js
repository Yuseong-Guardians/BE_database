module.exports = {
  apps: [
    {
      name: 'yuseong-app', // 애플리케이션 이름
      script: 'pnpm', // pnpm을 사용하여 실행
      args: 'start', // nestjs start 명령어 실행
      cwd: './', // 프로젝트 루트 디렉토리
      interpreter: 'node', // node.js를 interpreter로 사용
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};

