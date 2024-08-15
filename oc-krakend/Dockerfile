FROM devopsfaith/krakend:1.0

USER root

ADD ./config /etc/krakend

ENV FC_ENABLE=1 \
    FC_SETTINGS="/etc/krakend/settings/prod" \
    FC_TEMPLATES="/etc/krakend/templates"

EXPOSE 8080
