class Remote {
    onOff(tv) {
        tv.setStatus(!tv.getStatus())
    }

    chanelReset(tv,chanel) {
        if (tv1.getStatus()) {
            tv.setChanel(chanel)
        } else {
            console.log("bat tivi len")
        }
    }

    volumeReset(tv) {
        if (tv.getStatus()) {
            if (tv.getVolume >= 3) {
                return 'max'

            } else {
                tv.setVolume(tv.getVolume() + 1)
            }
        }
    }
}
