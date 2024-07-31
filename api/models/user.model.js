import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXk5ueutLeor7LW2tvn6eqrsbXh4+Sxt7q6v8La3d7S1dfIzM7Axce3vL/O0tTd4OHNLmYDAAAFCElEQVR4nO2c23LrKgxADYg72P//twc76dlN4rQG5EjusJ4yefIaIRDXaRoMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBp8CAKg/AYFiAYv3Sim/LHBhp9UjRJftF9nFYC7pU0xiFq/YuFzNB2C2Uu+4CKGlni+lY6KUuyY3pIyG+hOPYqLeD8q38Ii4UH/mAcCE/JvKFh07G+6NDXwSR1xKcHTyvG1gPhSWu06eOdtAPBiWu42IfG0gVZjcSBNXHVftIrRjauNqmhhvG9PkstowHEBTm0uxSexsYqtLsYnUH/9EsM0uhUD9+Q8sFWPlTmgsq0KtOWHuNo5Pjwahz6WUnYwKm06VNTZcZKCzkW0yiYvNT7PKwzY8+gBoKMl24BGapb+RrVhPLTLhZMwGh9CYrrH/G5k+a8rkEgv6aSdS+gsOcwHwWK2stDNFHBrEViYEdU2D1pcJBrO0pXGyvCuTaVcFoW9S9oQNtDIds+VXNHHS4MrQ7nQYxPwn7wEw87/gKCsa8F0LGS+QdmegMDuzAmUNgC2jSWUCqouQlAMNugxtZFDzv0SGzmWC+S/JYEfmT3UAo2tmKmNJK4C/VM4gF5qatND8W1MA3JmmpN2phRnRRWjiNQC1dw6zFUu8Cth6LmMP4vzHXgSkdSlJgzdsWurl2cmgJY3O5HtniFsa9FtniIUzeSsrNlhJ46hNJsRxk34XsAA4LpbaYwNmlBMaLAKDlDU8ArN2aP2hIV3+ewC6CzSdubhMk+8NjaQ/nfGPzj5AztQCD6QeG8lhvPwHdB2fzdTnTJ7oWUGjnmC+0jGx4XVE+0ZrjcYr+e80VpwMCv9dGjY4NMu4bKg3t2bfu7DL/W94WzPeSF4XGl4wFaOnpF5a+pUy4By9dMqmUH4PTEcuOGqR2N8GXgHw7pfoaOvUVa7RA6hk39481zqny6isFJ24+rwI6RKUeCmVFQCj5uislFLfKL+ES7O66jMaZvEqxJSSSynGWanlmiZ3yrebL6Yri2yvzjxD/U31bJ+9lBYWk3Nfz844tza14KfrSJWv9CVN1nRfU/+5L7v9ndPsJ463zb9j/Jzy+rW/FgBb1xZVSSR+TiXNF7WJVMwBSpx0jsGz6hm2ISVlXTuZucfIpqgWHvFZTcpg3yTyv09pcYH+CafSZ80/lGE18dme2KJUmULKVY+z/ORTqja6R4IA5myxVG4+wkaSE2eAetvsG5+ftJWo9CfKG2RaPqsTBMY+5hu0Tp9btTEhn6iy6Xzo+TOYVOoZVA4iczi/sYGJB5eSOtHy7IUCgNC1RVanY+OZHdvHwvKlk85bigaPdhzrqI2dT6pAcW/LHuWcMRT7rsxBdD7D5nOZ/2QjsU87gnFELgL9XA0sVZtI6DaY+57FhSRfzrDBviXTAtY+LgcXLJsyVDJwwbEB3Ps+7aC8ScHEpdC/PIByNBYF3XuSCxSbuPTf4qIeYB7pO/0IVAXZG2THVBrjwDIqXSeGqT/+hfaaE/M+GRa2sUcDT/3lO7Ref8K7gIVJ28V09DdlcGh7c7f/tsI5tJyCZhqYtqzh2JVttFznRH4fC5PqOTTu3XhU6p9A4DIl26O6C/j4snIFtcUz9us4qFS3s8isXn6g8kUXzilTfYNgwXwaA526pGE19X+lMmm4TTEfqZSh2Vg6TNWiE+/8L8NmzZEH4yRvqmpNFRRnQuWouXfAmg11KoPBYDAYDAZX4T+su070b+ZTkQAAAABJRU5ErkJggg==",
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;