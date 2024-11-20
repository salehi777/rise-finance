"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import { authSignupApi } from "@/services/auth";
import Link from "next/link";
import { Button, Grid, InputAdornment } from "@mui/material";
import TextField from "@/components/forms/textfield";
import { LoadingButton } from "@mui/lab";
import Icon from "@/components/icon";
import { useRouter } from "next/navigation";
import { StyledForm } from "./styled";
import useApi from "@/hooks/useApi";

export default function Signup() {
  const methods = useForm();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { isLoading, mutate } = useApi(authSignupApi, {
    onSuccess: () => {
      toast.success("Signup was successful");
      router.push("/auth/login");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <StyledForm>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Grid container direction="column" alignItems="center" spacing={3.5}>
            <Grid item sx={{ width: "100%" }}>
              <TextField
                name="full_name"
                label="Name"
                placeholder="Name"
                rules={{ required: true }}
              />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <TextField
                name="username"
                label="Username"
                placeholder="Username"
                rules={{ required: true }}
              />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <TextField
                name="password"
                label="Password"
                type={!show ? "password" : "text"}
                placeholder="Password"
                rules={{ required: true, deps: ["confirm_password"] }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon
                        src={`/icon/eye${!show ? "-slash" : ""}.svg`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setShow((prev) => !prev)}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <TextField
                name="confirm_password"
                label="Confirm Password"
                type={!show ? "password" : "text"}
                placeholder="Confirm Password"
                rules={{
                  required: true,
                  validate: (value, formValues) =>
                    value === formValues.password ||
                    "Confirm password not matched",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton
                type="submit"
                loading={isLoading}
                variant="contained"
              >
                Signup
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </StyledForm>
  );
}
