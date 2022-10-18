Feature: Reproduzir
  As um usuário do sistema
  I want to reproduzir e baixar músicas
  So that eu possa ouvir
  And baixar músicas

  Scenario: Usuário consegue reproduzir música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "play"
    Then a música é reproduzida
    And aparece seu nome na barra inferior

  Scenario: Usuário pausa música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    And a música estar sendo reproduzida
    When eu clico no botão "pause"
    Then a música é pausada

  Scenario: Pular para a próxima música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "próxima música"
    Then a música é pulada
    And começa a tocar uma nova música

  Scenario: Voltar para a música anterior
  Given estou na tela de "músicas"
  And existe uma música com o nome "The End"
  When eu clico no botão "voltar música"
  Then a música volta
  And começa a tocar a música anterior

  Scenario: Usuário não consegue reproduzir música
    Given estou na tela de "músicas"
    And existe uma música com o nome "The End"
    When eu clico no botão "play"
    Then a música não é reproduzida
    And aparece a mensagem de erro
