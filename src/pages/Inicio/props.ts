import React from "react";

export const titleProps: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "global-element_title",
};

export const imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
  className: "global-element_image"
};

export const formProps: React.FormHTMLAttributes<HTMLFormElement> = {
  className: "global-form_container global-form_container--bottom",
};

export const formTitleProps: React.HTMLAttributes<HTMLHeadingElement> = {
  className: "global-form_title",
};

export const labelMesaProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
  htmlFor: "mesa",
  className: "global-element_label",
};

export const inputMesaProps: React.InputHTMLAttributes<HTMLInputElement> = {
  className: "global-element_input",
  type: "text",
  name: "mesa",
  id: "mesa",
  placeholder: "Insira o nome da mesa",
  required: true,
};

export const labelNomeProps: React.LabelHTMLAttributes<HTMLLabelElement> = {
  htmlFor: "nome",
  className: "global-element_label",
};

export const inputNomeProps: React.InputHTMLAttributes<HTMLInputElement> = {
  className: "global-element_input",
  type: "text",
  name: "nome",
  id: "nome",
  placeholder: "Insira seu nome",
  required: true,
};

export const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
  className: "global-element_button",
  type: "submit",
};
