FROM node:18.19.0

ENV PATH /app/node_modules/.bin:$PATH 
COPY package*.json ./ 
RUN npm install --force

COPY . . 
RUN npm run build
# RUN serve -s dist -l 8809 
CMD  npm run preview --host

EXPOSE 8585