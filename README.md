# Docker practice

Try building an image from the `Dockerfile`:

```
docker build . -t snippets-api
```

Try running a container from the image:

```
docker run -dp 3000:3000 snippets-api
```

To stop the container, first find the container ID by running `docker ps`. Then run `docker stop <container_id>`.

Can you try mapping a different port on your host machine, such as port 80 (the default port for HTTP)? As long as the port isn't already in use, you should be able to visit `http://localhost` to view the application.

```
docker run -dp 80:3000 snippets-api
```
