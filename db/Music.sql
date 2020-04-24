-- SQLite

-- アーティスト
CREATE TABLE IF NOT EXISTS artist(
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO artist VALUES (1, "End of the World"), (2, "青林檎夫人");

DROP TABLE artist;

-- アルバム
CREATE TABLE IF NOT EXISTS album(
    id INTEGER PRIMARY KEY,
    title TEXT,
    artist_id INTEGER,
    FOREIGN KEY (artist_id) REFERENCES artist(id)
);

INSERT INTO album VALUES (1, "Chameleon", 1), (2,"Introduction" , 2);

DROP TABLE album;

-- 曲
CREATE TABLE IF NOT EXISTS song(
    id INTEGER PRIMARY KEY,
    name TEXT,
    album_id INTEGER,
    type_id INTEGER,
    genre_id INTEGER,
    writer TEXT,
    time INTEGER,
    FOREIGN KEY (album_id) REFERENCES album(id),
    FOREIGN KEY (type_id) REFERENCES type(id),
    FOREIGN KEY (genre_id) REFERENCES genre(id)
);

INSERT INTO song VALUES (1, "SOS", 1, 2, 1, "Nakajima", 300), (2, "慶びの種", 2, 2, 2, "Ohmori", 330), (3, "スターダム", 2, 2, 3, "Ohmori", 180);

DROP TABLE song;

-- ジャンル
CREATE TABLE IF NOT EXISTS genre(
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO genre VALUES (1, "POP"), (2, "ROCK"), (3, "その他");

DROP TABLE genre;

-- メディアタイプ
CREATE TABLE IF NOT EXISTS type(
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO type VALUES (1, "ストリーミング"), (2, "CD"), (3, "デジタル配信");

DROP TABLE type;

-- プレイリスト
CREATE TABLE IF NOT EXISTS list(
    id INTEGER PRIMARY KEY,
    name TEXT
);

INSERT INTO list VALUES (1, "お気に入り"), (2, "よく聴く曲"), (3, "新曲");

DROP TABLE list;

-- 曲メディアタイプ
CREATE TABLE IF NOT EXISTS song_type(
    song_id INTEGER,
    type_id INTEGER,
    PRIMARY KEY (song_id, type_id),
    FOREIGN KEY (song_id) REFERENCES song(id),
    FOREIGN KEY (type_id) REFERENCES type(id)
);

INSERT INTO song_type VALUES (1, 2), (2, 2), (3, 2);

DROP TABLE song_type;

-- 曲プレイリスト
CREATE TABLE IF NOT EXISTS song_list(
    list_id INTEGER,
    song_id INTEGER,
    PRIMARY KEY (list_id, song_id),
    FOREIGN KEY (list_id) REFERENCES list(id),
    FOREIGN KEY (song_id) REFERENCES song(id)
);

INSERT INTO song_list VALUES (1, 1), (2, 1);

DROP TABLE song_list;
