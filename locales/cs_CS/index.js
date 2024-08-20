const cs_CS = {
  language_name: "Čeština",
  
  // Menu
  sub_title: "Jednoduché, rychlé, bezpečné šifrování souborů v prohlížeči", //client-side replaced by "in browser", other translations would sound extremely weird
  home: "Domů",

  // Settings
  settings: "Nastvení",
  language: "Jazyk",
  change_language: "Změnit jazyk",
  change_appearance: "Změnit vzhled",
  language_changed: "Jazyk nastaven! - Je potřeba znovu načíst stránku.",
  help_translate: "Nemůžete najít svůj jazyk? Můžete pomoci s překladem aplikace dle instrukcí na githubu.",
  reload: "NAČÍST ZNOVA",
  dark_mode: "Tmavý režim",
  close: "Zavřít",
  reset: "Resetovat",
  guide: "Průvodce",
  multiple_tabs_alert: "Varování: více karet",
  multiple_tabs_alert_notice_one: "Vypadá to, že už máte TreasureLock otevřené v jíné kartě/okně.",
  multiple_tabs_alert_notice_two: "Prosím, vyhněte se šifrování/dešifrování souborů v různých kartách najednou.",
  understand: "ROZUMÍM",

  // Common
  file: "soubor",
  files: "soubory",
  password: "Heslo",
  public_key: "Veřejný klíč",
  private_key: "Soukromý klíč",
  drag_drop: "Přetáhněte nebo vyberte soubor",
  drag_drop_files: "Přetáhněte nebo vyberte soubory",
  browse_file: "Vybrat soubor",
  browse_files: "Vybrat soubory",
  change_file: "Změnit soubor",
  add_files: "Přidat soubory",
  next: "Další",
  back: "Zpět",
  error: "Chyba",
  required: "Povinné",
  success: "Úspěch",
  show_password: "Ukázat Heslo",
  copy_password: "Zkopírovat Heslo",
  password_copied: "Heslo zkopírováno!",
  show_private_key: "Ukázat Soukromý Klíč",
  load_public_key: "Načíst Veřejný Klíč",
  load_private_key: "Načíst Soukromý Klíč",
  short_password: "Prosím, vložte heslo o délce alespoň 12 znaků. Nebo ho vygenerujte",
  wrong_public_key: "Špatný Veřejný Klíč",
  wrong_private_key: "Špatný Soukromý Klíč",
  invalid_keys_input: "Vložen špatný klíč.",
  invalid_key_pair: "Tento klíč je neplatný! Vyberte klíče pro jiné strany.",
  ready_to_download: "úspěšně staženo a připraveno ke stažení!",
  files_ready_to_download: "soubory byly úspěšně nahrány a připraveny na stažení!",
  downloading_file: "Stahování...",
  checking_file: "Kontrola souborů...",
  page_close_alert: "Nezavírejte stránku během stahování souborů!",
  offline_note: "Soubory nejsou nahrávány na server, vše je prováděno offline, v prohlížeči.",
  
  // Password Strength Check
  very_weak: "Velmi Slabé (lze uhádnout)",
  weak: "Slabé",
  moderate: "Průměrné",
  good: "Dobré",
  strong: "Silné",
  crackTimeEstimation: "odhad času prolomení:",
  less_second: "pod vteřinu",
  seconds: "sekund",
  minutes: "minut",
  hours: "hodin",
  days: "dnů",
  months: "měsíců",
  years: "let",
  centuries: "staletí",

  // Encryption
  encryption: "Zašifrování",
  drop_file_enc: "Přetáhnout soubory k zašifrování",
  choose_files_enc: "Vybrat soubory k zašifrování",
  enter_password_enc: "Vložte heslo",
  enter_keys_enc: "Vložte Veřejný klíč příjemce a Váš Soukromý klíč",
  password_strength: "Síla hesla",
  choose_strong_password: "Vyberte silné Heslo",
  generate_password: "Vegenerovat Heslo",
  recipient_public_key: "Veřejný Klíč Příjemce",
  enter_recipient_public_key: "Vložte veřejný klíč příjemce",
  your_private_key_enc: "Váš Soukromý Klíč",
  enter_private_key_enc: "Vložte svůj soukromý klíč",
  encrypted_files: "Zašifrované soubory",
  download_encrypted_files: "Stáhnout zašifrované soubory",
  success_downloaded_files_enc: "Zašifrované soubory úspěšně uloženy!",
  encrypt_more_files: "Zašifrovat další soubory",
  create_shareable_link: "Vytvořit odkaz pro sdílení",
  create_shareable_link_tooltip: "Vytvořit odkaz s Vaším veřejným klíčem",
  create_shareable_link_note: "Tento odkaz byl vytvořen offline.",
  create_shareable_link_copied: "Odkaz pro sdílení zkopírován!",
  copy_link: "Zkopírovat odkaz",
  after_enc_note_one: "Pro dešifrování musíte příjemci poslat i Váš veřejný klíč.",
  after_enc_note_two: "You can create a link that has your public key so you do not have to send your public key and worry about the recipient entering it.",
  testing_password: "Test hesla...",
  testing_keys: "Test Klíčů...",

  // Decrypion
  decryption: "Dešifrování",
  drop_file_dec: "Přetáhnout soubory k dešifrování",
  choose_files_dec: "Vybrat soubory k dešifrování",
  sender_key_loaded: "Veřejný klíč odesílatele načten, prosím vyberte zašifrovaný soubor.",
  recipient_key_loaded: "Veřejný klíč příjemce načten, prosím vyberte soubor k zašifrování.",
  file_not_encrypted_corrupted: "Soubor nebyl zašifrován pomocí TreasureLock, nebo je požkozen!",
  old_version: "Soubor byl zašifrován starší verzí TreasureLock, navštivte verzi v1 pro dešifrování.",
  file_mixup: "Vybrané soubory pro dešifrování musí být zašifrovány stejnou metodou, heslem nebo veřejným klíčem. Vyberte odpovídající soubory.",
  enter_password_dec: "Vložte heslo pro dešifrování",
  enter_keys_dec: "Vložte Veřejný klíč odesílatele a Váš Soukromý klíč",
  wrong_password: "Špatné Heslo",
  file_has_wrong_password: "má špatné heslo, test hesel byl zastaven. Ujištěte se, že všechny soubory mají stejné správné heslo pro dešifrování.",
  file_has_wrong_keys: "má špatné klíče, test klíčů byl přerušen. Ujištěte se, že všechny soubory mají stejné správné klíče pro dešifrování.",
  sender_public_key: "Veřejný Klíč Příjemce",
  enter_sender_public_key: "Vložte veřejný klíč odesílatele",
  your_private_key_dec: "Váš Soukromý Klíč",
  enter_private_key_dec: "Vložte svůj soukromý klíč",
  decrypted_files: "Dešifrované Soubory",
  download_decrypted_files: "Stáhnout dešifrované soubory",
  success_downloaded_files_dec: "Dešifrované soubory úspěšně staženy!",
  decrypt_other_files: "Dešifrovat Další Soubory",


  // Limited
  choose_file_enc: "Vyberte soubor k zašifrování",
  choose_file_dec: "Vyberte soubor k dešifrování",
  encrypted_file: "Zašifrovaný Soubor",
  decrypted_file: "Dešifrovaný Soubor",
  download_encrypted_file: "Stáhnout zašifrovaný soubor",
  download_decrypted_file: "Stáhnout dešifrovaný soubor",
  success_downloaded_file_enc: "Zašifrovaný soubor úspěšně stažen!",
  success_downloaded_file_dec: "Dešifrovaný soubor úspěšně stažen!",
  encrypt_another_file: "Zašifrovat Další Soubor",
  decrypt_another_file: "Dešifrovat Další Soubor",
  limited_safari: "Prohlížeče Safari jsou limitovány (jeden soubor, 1GB)",
  limited_mobile: "Mobilní prohlížeče jsou limitovány (jeden soubor, 1GB)",
  limited_private: "Máte omezení (jeden soubor, 1GB) kvůli Soukromému prohlížení.",
  file_too_big: "Soubor je příliš velký!",
  choose_file_1gb: "Vyberte soubor do 1GB.",
  encrypt_file: "Zašifrovat soubor",
  encrypting_file: "Zašifrovat...",
  decrypting_file: "Dešifrovat...",
  page_close_alert_enc: "Nezavírejte stránku během šifrování!",
  success_encrypted: "Soubor úspěšně zašifrován!",
  page_close_alert_dec: "Nezavírejte stránku během dešifrování!",
  success_decrypted: "Soubor úspěšně dešifrován!",
  download_file: "Stáhnout Soubor",

  // Keypair generation panel
  generate_now_button: "Vygenerovat",
  generate_key_pair_button: "Vygenerovat Pár Klíčů",
  generate_another_key_pair_button: "Vygenerovat Další Pár Klíčů",
  key_pair_question: "Nemáte veřejné/soukromé klíče?",
  key_pair_generation_title: "Generování veřejných/soukromých párů klíčů:",
  download_public_key: "Stáhnout Veřejný Klíč",
  download_private_key: "Stáhnout Soukromý Klíč",
  generate_public_key: "Vygenerovat Veřejný Klíč",
  generate_private_key: "Vygenerovat Soukromý Klíč",
  show_private_key: "Ukázat Soukromý Klíč",
  why_need_private_key: "Proč je potřeba můj soukromý klíč?",
  private_key_notice: "Nikomu svůj soukromý klíč nedávejte! Ke sdílení je pouze veřejný klíč.",
  generate_qr_code: "Vygenerovat QR kód",
  qr_code_note_one: "Tento QR kód obsahuje Váš veřejný klíč. Po jeho naskenování naše aplikace automaticky klíč načte.",
  qr_code_note_two: "S tímto QR kódem nebudou ostatní muset při šifrování ručně vkládat Váš veřejny klíč.",
  qr_code_note_three: "Tento QR kód byl vytvořen offline.",
  
};

export default cs_CS;
