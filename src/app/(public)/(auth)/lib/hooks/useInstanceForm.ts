import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, DefaultValues, FieldValues, Resolver } from "react-hook-form";

// export const useInstanceForm = <
//   T extends FieldValues,
//   TSchema extends z.ZodType<T, any, any>
// >(
//   schema:  ZodType<T>,
//   defaultValues?: DefaultValues<T>,
// ) => {
//   const resolver = zodResolver(schema as any) as unknown as Resolver<T>;
//   const form = useForm<T>({ resolver, defaultValues });

//   return form;
// };


export const useInstanceForm = <T extends FieldValues>(
  schema: ZodType<T>,
  defaultValues?: DefaultValues<T>,
) => {
  const form = useForm<T>({
    resolver: zodResolver(schema as any) as unknown as Resolver<T>,
    defaultValues,
  });

  return form;
};

