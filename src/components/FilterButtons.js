import React, {useEffect} from 'react';
import { Button, SimpleGrid } from "@chakra-ui/react";


const FilterButtons = props => {
  const {colNum, handleClick, techFilter} = props;

  const languages = [
    {name: 'Rust', icon: 'devicon-rust-plain'},
    {name: 'Javascript', icon:'devicon-javascript-plain c'},
    {name: 'Haskell', icon: 'devicon-haskell-plain'},
    {name: 'Java', icon: 'devicon-java-plain'},
    {name: 'Objective-c', icon: 'devicon-objectivec-plain'},
    {name: 'Scala', icon: 'devicon-scala-plain'},
    {name: 'Golang', icon: 'devicon-go-plain'},
    {name: 'Kotlin', icon: 'devicon-kotlin-plain'},
    {name: 'Ruby', icon: 'devicon-ruby-plain'},
    {name: 'Python', icon: 'devicon-python-plain'},
    {name: 'C++', icon: 'devicon-cplusplus-plain'},
    {name: 'C#', icon: 'devicon-csharp-plain'},
    {name: 'Php', icon: 'devicon-php-plain'},
    {name: 'F#', icon: 'devicon-fsharp-plain'},
    {name: 'Ocaml', icon: 'devicon-ocaml-plain'},
    {name: 'Typescript', icon: 'devicon-typescript-plain'},
    {name: 'Elixir', icon: 'devicon-elixir-plain'},
    {name: 'Swift', icon: 'devicon-swift-plain'},
    {name: 'C', icon: 'devicon-c-plain'}
  ];

  const renderButtons = () => {
    console.log("Render")
    return languages.map((language, index) => {
      return (
        <Button 
          key={index}
          bg={techFilter.includes(language.name.toLowerCase()) ? '#1B213B'  : '#FFF'}
          color='#A0AEC0'
          leftIcon={<i className={language.icon} />}
          width='120px'
          onClick={() => handleClick(language.name)}
          >
          {language.name}
        </Button>
      )
    });
  }

  let buttonList = renderButtons();


  return (
    <SimpleGrid columns={colNum} spacingX="10px" spacingY="10px">
      {buttonList}
    </SimpleGrid>
  );
}

export default FilterButtons;
