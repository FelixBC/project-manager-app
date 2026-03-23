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

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjects([...projects, projectFormValues]);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as keyof ProjectFormValues;
    const target = e.target.name;
    const inputType = e.target.type;

    const nextValue =
      e.target instanceof HTMLInputElement && inputType === "checkbox"
        ? e.target.checked
        : e.target.value;
    setProjectFormValues((projectFormValues) => ({
      ...projectFormValues,
      [key]: target,
    }));
  };

  return (
    <form>
      <section>
        <h1>Projects</h1>

        <label htmlFor="name">Name</label>
        <input value={projectFormValues.name} id="name" name="name" />

        <label htmlFor="isActive">Active</label>
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          checked={projectFormValues.isActive}
          onChange={handleOnChange}
        />

        <label htmlFor="name">Name</label>
        <input
          value={projectFormValues.beginDate}
          id="beginDate"
          name="beginDate"
          onChange={handleOnChange}
        />

        <label htmlFor="endDate">EndDate</label>
        <input
          value={projectFormValues.endDate}
          id="endDate"
          name="endDate"
          onChange={handleOnChange}
        />

        <label htmlFor="description">Description</label>
        <input
          value={projectFormValues.description}
          id="description"
          name="description"
          onChange={handleOnChange}
        />
        <FormActions />
      </section>
    </form>
  );
};
export default Projects;
