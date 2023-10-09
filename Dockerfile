FROM  node:20.8.0-slim
COPY . /home/
RUN cd home/
RUN yarn
