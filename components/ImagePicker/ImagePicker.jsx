"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
    const inputImage = useRef();
    const [previewImage, setPreviewImage] = useState(null);
    const pickImageHandler = () => {
        inputImage.current.click();
    };
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name} className={classes.label}>
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {previewImage ? (
                        <Image fill src={previewImage} alt="image selected by the user" />
                    ) : (
                        <p>No Image Selected Yet!</p>
                    )}
                </div>
                <input
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    className={classes.input}
                    ref={inputImage}
                    onChange={handleChangeImage}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={pickImageHandler}
                >
                    Pick Image
                </button>
            </div>
        </div>
    );
};

export default ImagePicker;
