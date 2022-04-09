import React from "react";

export const title: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "global-element_title",
};

export const image: React.ImgHTMLAttributes<HTMLImageElement> = {
  className: "global-element_image"
};

export const form: React.FormHTMLAttributes<HTMLFormElement> = {
  className: "global-form_container global-form_container--bottom",
};

export const formTitle: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "global-form_title",
};

export const labelMesa: React.LabelHTMLAttributes<HTMLLabelElement> = {
  htmlFor: "mesa",
  className: "global-element_label",
};

export const inputMesa: React.InputHTMLAttributes<HTMLInputElement> = {
  className: "global-element_input",
  type: "text",
  name: "mesa",
  id: "mesa",
  placeholder: "Insira o nome da mesa",
  required: true,
};

export const labelNome: React.LabelHTMLAttributes<HTMLLabelElement> = {
  htmlFor: "nome",
  className: "global-element_label",
};

export const inputNome: React.InputHTMLAttributes<HTMLInputElement> = {
  className: "global-element_input",
  type: "text",
  name: "nome",
  id: "nome",
  placeholder: "Insira seu nome",
  required: true,
};

export const button: React.ButtonHTMLAttributes<HTMLButtonElement> = {
  className: "global-element_button",
  type: "submit",
};
