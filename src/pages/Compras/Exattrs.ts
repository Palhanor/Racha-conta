import React from "react";

// export const mapping = (arr: any[], JSX: JSX.Element) => {
  // Pode receber uma função?
// }

export const mascaraPreco = (valor: number | null) => {
  if (!valor) valor = 0;
  const valorStr = valor.toString().padStart(3, "0");
  const valorArr = valorStr.split("");
  const newNumInt = valorArr.slice(0, valorArr.length - 2);
  const newNumFloat = valorArr.slice(valorArr.length - 2, valorArr.length);
  return `R$ ${newNumInt.join("")},${newNumFloat.join("")}`;
}

export const pegaPreco = (valor: string) => {
  const removeMascaraMonetaria = valor.replace("R$ ", "").replace(",", "");
  const valorDoInputStr = parseInt(removeMascaraMonetaria);
  return valorDoInputStr;
}

export const form = {
  className: "global-form_container global-form_container--top"
}

export const formTitle = {
  className: "global-form_title"
}

export const multiselect = {
  isObject: false,
  placeholder: "Autores da compra",
  style: {
    searchBox: {
      // Input e container das tags
      cursor: "pointer",
      color: "#426D77",
      border: "1px solid #426D77",
      borderRadius: "5px",
      marginBottom: "1rem",
      padding: ".5rem",
      fontFamily: "Marcellus SC",
    },
    chips: {
      // Tag contendo o valor selecionado
      background: "#426D77",
      borderRadius: "5px",
    },
    optionContainer: {
      // Lista contendo os valores para selecionar
      marginTop: "-1rem",
    },
  }
}

export const labelNome = {
  htmlFor: "nomeCompra",
  className: "global-element_label"
}

export const inputNome = {
  type: "text",
  name: "nomeCompra",
  id: "nomeCompra",
  placeholder: "Nome da compra",
  className: "global-element_input",
  required: true
}

export const labelPreco = {
  htmlFor: "precoCompra",
  className: "global-element_label"
}

export const inputPreco = {
    type: "text",
    name: "precoCompra",
    id: "precoCompra",
    className: "global-element_input",
    onFocus: (e: React.FocusEvent<HTMLInputElement, Element>) => {
      const valueLength = e.target.value.length * 2;
      e.target.setSelectionRange(valueLength, valueLength);
    },
    required: true
}

export const botao = {
  className: "global-element_button"
}

export const containerLista = {
  className: "global-list_container"
}

export const listaTitulo = {
  className: "global-list_title"
}

export const lista = {
  className: "global-list"
}