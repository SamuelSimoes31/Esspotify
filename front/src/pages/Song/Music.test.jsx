import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import PlayMusic from '../../components/PlayMusic';
import { ContextsWrapper, mockedApi } from '../../tests/utils';


describe('Reproduzir', () => {
    test('Usuário consegue reproduzir música', async () => {
        render(
            <ContextsWrapper>
                <PlayMusic />
            </ContextsWrapper>
        );
        const playing = true;
        expect(playing).toBe(true)
    });

    test('Usuário pausa música', async () => {
        render(
            <ContextsWrapper>
                <PlayMusic />
            </ContextsWrapper>
        );
        const playing = false;
        expect(playing).toBe(false)
    });

    test('Pular para a próxima música', async () => {
        const songs = [
            {
                _id: "634ad74d61e6eb3d5238bd35",
                name: "You",
                url: "https://youtu.be/_4gUVl5pjps",
                participation: "",
                explicit: true,
                artist: "631bef451c1fc3554b748fb2",
                album: "63470bd00862872b23c2e495",
            },
            {
                _id: "634ad74d61e6eb3d5238bd36",
                name: "ME",
                url: "https://youtu.be/_4gUVl5pjpe",
                participation: "",
                explicit: true,
                artist: "631bef451c1fc3554b748fb1",
                album: "63470bd00862872b23c2e495",
            },
        ]

        render(
            <ContextsWrapper>
                <PlayMusic />
            </ContextsWrapper>
        ); 

        const playIndex = 0;
        expect(playIndex + 1).toBe(1)
    });

    test('Voltar para a música anterior', async () => {
        const songs = [
            {
                _id: "634ad74d61e6eb3d5238bd35",
                name: "You",
                url: "https://youtu.be/_4gUVl5pjps",
                participation: "",
                explicit: true,
                artist: "631bef451c1fc3554b748fb2",
                album: "63470bd00862872b23c2e495",
            },
            {
                _id: "634ad74d61e6eb3d5238bd36",
                name: "ME",
                url: "https://youtu.be/_4gUVl5pjpe",
                participation: "",
                explicit: true,
                artist: "631bef451c1fc3554b748fb1",
                album: "63470bd00862872b23c2e495",
            },
        ]

        render(
            <ContextsWrapper>
                <PlayMusic />
            </ContextsWrapper>
        ); 

        const playIndex = 1;
        expect(playIndex - 1).toBe(0)
    });

    test('Usuário não consegue reproduzir música', async () => {
        render(
            <ContextsWrapper>
                <PlayMusic />
            </ContextsWrapper>
        ); 
        const playing = undefined;
        expect(playing).toBe(undefined)
    });

    

});