import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from '../shemas';

export type FormBuilderValues = z.infer<typeof formSchema>;

export const useFormBuilder = () => {
  const methods = useForm<FormBuilderValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      phones: [""],
      parents: []
    }
  });

  const onSubmit = (data: FormBuilderValues) => {
    console.log("Отправленные данные:", data);
  };

  return {
    methods, 
    onSubmit
  };
};
