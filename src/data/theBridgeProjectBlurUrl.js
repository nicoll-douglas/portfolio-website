const theBridgeProjectBlurUrl =
  "data:image/jpeg;base64,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EUBEUBAAQVFAABFAQUBFAAAAUAAEFAAAAFURQAAEAAAAAAAAAAABAAAAAFBFAAAABAAABQQUAAB1FFVBQEFAQUBAAAAAAAAEUBBQEFAQUBAEEFAQVBRFARFAQVAQVAQUFRFARFAQAEFQBFAQUBBRRBQAAAFBFAQAAUAAAAUEFAQUEAAAAEUBFAEUARQAAAAEAAAUEUAAAAAAAAAdhQVBQEFAQUBBQEFAQVAAUEFAQAAAEFAQUBEUBBQVEUBBUQQUBkUBEUBEUVURQEFQEFQBFAQUBBQEFAQUAAAFBAAAUBFAAAAFBBQEFAQUBBQRBQEFAQUBBQEUAAAAAAAAABQEFAQUB2FFRBQEFAQUBBQEFBUFAQUQQUBBQEAAABBQEFQBFBUFQEFARFARFARFARFARGkFQVAQVAEUBBQEFAQUURQAAABQRQABREUAAAAABQEFAQUBBQEFBEFAQVAAABQEFEEUAAAAAAAAAAAdxRUQUBBQEFAQUBBQEFBUFAQUBBQEFEEAARQEFQAAVBUBBQERQERQERQERQEABAAQVBRFFEFQAAAAAFBFAAAAUAAABREFAAAAAAAAAAAAAAAABAAAAAAAAAUBBQEUAAEAAHcUVEFAQUBBQEFAQUBBQEFBUFAQVABQEAARRBBUAAFQVAQVAEUBEUBEUBEUBEUURFAQAVBQEAAAAAAAABQRQAAAFAAAABAUBBQAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAB6ABAAAAAAAAAAAAAAUAAAAAAABBUQAAQVBRFAQAEABBUBBUBBUUQVAQVAEUFQABFQAAAABQAAAAAUAAABQAAAAAAQAAAAAAAAAAAAAAAAAAAEAAAAAUEFAQUB3AEAAAAAAAAAABQEAFAAAAAAAAAAQVAAEVAAQVAEVAEVFBFRARUUEVAEVAABUAAABBQAAAAAABUUAAAAFAAAAAAAEAABQEAAAAAAAAAAAAAAAAAEAUAAAAAAH/9k=";

export default theBridgeProjectBlurUrl;