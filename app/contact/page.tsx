"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/Ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select";
import { Button } from "@/components/Ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Ui/form";
import { Input } from "@/components/Ui/input";
import { useToast } from "@/components/Ui/use-toast";
import { Textarea } from "@/components/Ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string().nonempty("First name is required"),
  last_name: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  packages: z.enum(["Discovery Package", "Starter Package", "Professional Package"]),
  info: z.string().nonempty("Message is required"),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  packages: "Discovery Package" | "Starter Package" | "Professional Package";
  info: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      packages: "Discovery Package",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Navbar scrollToWebsiteDesign={() => {}} scrollToServices={() => {}} />
        <div className="md:flex items-start justify-center md:py-20 px-6">
          <div className="">
            <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Your new website awaits!
            </div>
          </div>

          <Form {...form}>
            {!submitted ? (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 h-full border rounded-3xl p-10 md:w-2/3"
              >
                <div className="md:flex items-center gap-6">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          First name *
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem className="items-center justify-center w-full">
                        <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                          Last name *
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Uncomment this section if you need the packages field */}
                {/* <FormField
                  control={form.control}
                  name="packages"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Which package are you inquiring about
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <div className="flex gap-4">
                            <SelectItem value="Discovery Package">Discovery Package</SelectItem>
                          </div>
                          <SelectItem value="Starter Package">Starter Package</SelectItem>
                          <SelectItem value="Professional Package">Professional Package</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Message *
                      </FormLabel>
                      <FormControl>
                        <Textarea style={{ height: "100px" }} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    className="text-sm font-light"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            ) : (
              <>
                <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
                  <div className="w-80 py-20">
                    <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />
                    <div className="text-gray-500 font-light text-center justify-center mx-auto py-10">
                      We&apos;ve received your inquiry and will be contacting you
                      via email shortly.
                    </div>
                  </div>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}
