echo "Build frontend"
cd frontend
npm i && npm run build
cd ..

echo "Build backend"
cd backend
./gradlew clean installDist
cd ..

echo "Run App"

docker-compose -f ./docker/docker-compose.yml up -d



