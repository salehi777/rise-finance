"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import { Button, Grid, InputAdornment, Typography } from "@mui/material";
import TextField from "@/components/forms/textfield";
import { LoadingButton } from "@mui/lab";
import Icon from "@/components/icon";
import { useRouter } from "next/navigation";
import { StyledForm } from "./styled";
import useApi from "@/hooks/useApi";
import { authLoginApi } from "@/services/auth";

export default function Login() {
  const methods = useForm({
    defaultValues: {
      username: "client",
      password: "password",
    },
  });
  const login = useAuthStore((state) => state.login);
  const [show, setShow] = useState(false);
  const router = useRouter();

  const { isLoading, mutate } = useApi(authLoginApi, {
    onSuccess: () => {
      toast.success("Login was successful");
      router.push("/dashboard");
    },
  });

  const onSubmit = (data) => {
    login(() => mutate(data));
  };

  return (
    <StyledForm>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <Grid container direction="column" alignItems="center" spacing={3.5}>
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
                rules={{ required: true }}
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
            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              <LoadingButton
                type="submit"
                loading={isLoading}
                variant="contained"
              >
                Login
              </LoadingButton>
            </Grid>

            <Grid item>
              <Link href="/forget-password">
                <Typography variant="body2">Forget Password</Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </StyledForm>
  );
}
