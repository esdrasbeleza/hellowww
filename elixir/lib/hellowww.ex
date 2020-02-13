defmodule Hellowww do
  import Plug.Conn
  use Plug.Router

  plug :match
  plug :dispatch
  
  get "/" do
    {_, hostname} = :inet.gethostname

    conn 
    |> put_resp_content_type("text/plain")
    |> send_resp(200, "[Elixir] Welcome to #{hostname}!")
  end

end
