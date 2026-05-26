#!/bin/bash
npm install
npx sequelize-cli db:migrate --env test
npm test
