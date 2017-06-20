module Template exposing (render)

import Html exposing (div, ul, li, h4, h2, a, text)
import Html.Attributes exposing (class, href)


render list =
    div [] (List.map block list)


block list =
    div []
        [ h4 []
            [ text list.title ]
        , ul [ class "posts-list" ] (List.map listItem list.items)
        ]


listItem rec =
    li [ class "post" ]
        [ h2 []
            [ a [ href rec.link ] [ text rec.title ]
            ]
        ]
