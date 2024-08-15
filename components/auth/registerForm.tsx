"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import GlobalLayout from "../nav/global";

const contactSchema = z.object({
  email: z.string().email({ message: "Entrer une adresse mail valide" }),
  password: z
    .string()
    .min(1, { message: "Le mot de passe est obligatoire" })
    .max(2000),
});

const RegisterForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <GlobalLayout title="Se Connecter">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/3 max-md:w-full">
                <FormLabel>Utilisateur</FormLabel>
                <FormControl>
                  <Input placeholder="Votre utilisateur" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-1/3 max-md:w-full">
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Votre mot de passe"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Se Connecter</Button>
        </form>
      </Form>
    </GlobalLayout>
  );
};

export default RegisterForm;
