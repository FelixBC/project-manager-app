"use client";

import React, { useId, useState } from "react";
import FormActions from "@/components/form-actions";
type ProjectsProps = {};
type ProjectFormValues = {
  id: string;
  name: string;
  isActive: boolean;
  beginDate: string;
  endDate: string;
  description: string;
};

const Projects: React.FC<ProjectsProps> = ({}) => {
  const [projects, setProjects] = useState<ProjectFormValues[]>([
    {
      id: "",
      name: "",
      isActive: false,
      beginDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [projectFormValues, setProjectFormValues] = useState<ProjectFormValues>(
    {
      id: "",
      name: "",
      isActive: false,
      beginDate: "",
      endDate: "",
      description: "",
    },
  );

  const handleReset = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setProjectFormValues((prev) => ({
      ...prev,
      name: "",
      isActive: false,
      beginDate: "",
      endDate: "",
      description: "",
    }));
  };

  const handleSubmit = () => {
    setProjects([...projects, projectFormValues]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name as keyof ProjectFormValues;
    const inputType = e.target.type;

    const nextValue =
      e.target && inputType === "checkbox" ? e.target.checked : e.target.value;
    setProjectFormValues((projectFormValues) => ({
      ...projectFormValues,
      [fieldName]: nextValue,
    }));
  };

  const classNameButtons = "flex flex-row justify-center gap-2 p-2";

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1 className="text-2xl">Projects</h1>

        <div className="flex flex-col gap-2 p-2">
          <label className="gap-2" htmlFor="name">
            Name
          </label>
          <input
            className="outline-solid"
            value={projectFormValues.name}
            id="name"
            name="name"
          />

          <label className="flex flex-col items-start gap-2" htmlFor="isActive">
            Active
            <input
              id="isActive"
              name="isActive"
              type="checkbox"
              checked={projectFormValues.isActive}
              onChange={handleOnChange}
            />
          </label>
          <label className="gap-2" htmlFor="beginDate">
            Begin Date
          </label>
          <input
            className="outline-solid"
            value={projectFormValues.beginDate}
            id="beginDate"
            name="beginDate"
            onChange={handleOnChange}
          />

          <label className="gap-2" htmlFor="endDate">
            End Date
          </label>
          <input
            className="outline-solid"
            value={projectFormValues.endDate}
            id="endDate"
            name="endDate"
            onChange={handleOnChange}
          />

          <label htmlFor="description">Description</label>
          <input
            className="outline-solid"
            value={projectFormValues.description}
            id="description"
            name="description"
            onChange={handleOnChange}
          />
        </div>
      </section>

      <FormActions className={classNameButtons} onReset={handleReset} />
    </form>
  );
};
export default Projects;
