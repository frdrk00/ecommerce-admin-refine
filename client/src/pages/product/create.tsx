import { Create, useAutocomplete } from "@refinedev/mui";
import {  Box, TextField } from "@mui/material";
import { useForm } from "@refinedev/react-hook-form";


export const ProductCreate = () => {
    const {
        saveButtonProps,
        refineCore: { formLoading },
        register,
        control,
        formState: { errors },
    } = useForm();


    return (
        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("title", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.title}
                    helperText={(errors as any)?.title?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Title"
                    name="title"
                />
                <TextField
                    {...register("desc", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.desc}
                    helperText={(errors as any)?.desc?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    multiline
                    label="Description"
                    name="desc"
                />
                
            </Box>
        </Create>
    );
};