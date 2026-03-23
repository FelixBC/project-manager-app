"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FormActions from "@/components/form-actions";
type projectsProps = {};

const Projects: React.FC<projectsProps> = ({}) => {
  const [name, setName] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <form>
      <section>
        <h1>Projects</h1>
        <label htmlFor="name">Name</label>
        <input value={name} id="name" name="name" onChange={handleName} />
        <FormActions />
      </section>
    </form>
  );
};
export default Projects;
