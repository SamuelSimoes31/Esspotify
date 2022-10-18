import {
    cleanup,
    render,
    screen,
    fireEvent,
    waitFor,
} from "@testing-library/react";
import EditArtist from ".";
import { ContextsWrapper, mockedApi } from "../../tests/utils";

afterEach(cleanup);
describe("Edit informations from artists", ()=>{
    afterEach((()=>{mockedApi.reset()}));
    
    test("Editar informação de artista com sucesso", async ()=>{
        const alertMock = jest.spyOn(window, "alert").mockImplementation();
        const pessoa = {
            name : "Test",
            email: "teste@email.com",
            country: "Brasil",
            genre: "Rock",
            image: "",
        }
        mockedApi.onGet("/artists/123456")
            .reply(200, pessoa)
        
            render(
            <ContextsWrapper>
                <EditArtist />
            </ContextsWrapper>
        );
        fireEvent.click(screen.getByRole("button"));
        await waitFor(() =>{
            expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("Deu certo");
    })

    test("Editar informação de artista com Falha", async ()=>{
        const alertMock = jest.spyOn(window, "alert").mockImplementation();
        const nameTarget = screen.getByText("Nome");
        fireEvent.change(nameTarget, {target : {value : ""}});
        render(
            <ContextsWrapper>
                <EditArtist />
            </ContextsWrapper>
        );
        fireEvent.click(screen.getByRole("button"));
        await waitFor(() =>{
            expect(alertMock).toHaveBeenCalledTimes(1);
        });
        expect(alertMock).toHaveBeenCalledWith("Algo deu errado");
    })
})