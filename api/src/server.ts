import { app } from ".";

app.listen(process.env.PORT, () =>
    console.log(`API is running on ${process.env.PORT}`)
);

