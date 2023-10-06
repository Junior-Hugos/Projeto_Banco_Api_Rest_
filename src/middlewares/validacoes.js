const validaSenha = ( req, res, next) => {
    const { senha_banco } = req.query;
    
    if ( senha_banco !== "Cubos123Bank") {
            return res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' })
    }
    next();
    }

    const senhaUsuario1 = ( req, res, next) => {
        const { senha_banco } = req.query;
        
        if ( senha_banco !== "123456") {
                return res.status(401).json({ mensagem: 'A senha informada é inválida!' })
        }
        next();
        }

        const senha = ( req, res, next) => {
                const { senha } = req.query;
                
                if ( senha !== "123") {
                        return res.status(401).json({ mensagem: 'A senha informada é inválida!' })
                }
                next();
                }
   
    
    module.exports= {
        validaSenha,
        senhaUsuario1, 
        senha
};