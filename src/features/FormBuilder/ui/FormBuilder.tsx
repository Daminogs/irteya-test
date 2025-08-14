import React from "react";
import { FormProvider } from "react-hook-form";
import { Button, Card } from "antd";
import { FieldFactory } from "./FieldFactory";
import { formSchema } from '../shemas';
import { useFormBuilder } from '../model';

export const FormBuilder: React.FC = () => {
  const { methods, onSubmit } = useFormBuilder();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <Card title="Форма" className="shadow-md">
          <div className="space-y-4">
            <FieldFactory schema={formSchema} baseName="" />
          </div>
          <div className="mt-6 text-right">
            <Button htmlType="submit" type="primary">
              Отправить
            </Button>
          </div>
        </Card>
      </form>
    </FormProvider>
  );
};
